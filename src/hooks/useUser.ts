import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserInput } from "../interface/User";
const useUser = () => {
    const navigate = useNavigate();
    const handleRegister = async (values: UserInput) => {
        try {
            const { data } = await axios.post("/register", values);
            console.log("User created:", data);
            toast.success("Register successfully");
            navigate("/");
        } catch (error: any) {
            // Log lỗi chi tiết
            if (error.response) {
                // Phản hồi từ server (status code, data, headers)
                console.error("Server responded with an error:", {
                    status: error.response.status,
                    data: error.response.data,
                    headers: error.response.headers,
                });
            } else if (error.request) {
                // Request được gửi nhưng không có phản hồi
                console.error("No response received from server:", error.request);
            } else {
                // Lỗi khác (ví dụ: cấu hình sai trong axios)
                console.error("Error during registration setup:", error.message);
            }

            // Log stack trace (nếu có)
            console.error("Error stack:", error.stack);

            // Hiển thị thông báo lỗi cho người dùng
            toast.error("Failed to register. Please try again.");
        }
    };

    const handleLogin = async (values: UserInput) => {
        console.log("Data to be sent:", values);
        try {
            const { data } = await axios.post("/login", values);
            console.log("Response data:", data);
            localStorage.setItem('token', data.accessToken || "");
            toast.success("Login successfully");
            navigate("/layoutPageAdmin");
        } catch (error) {
            console.error("Error during login:", error);
            if (axios.isAxiosError(error) && error.response) {
                console.error("Response data:", error.response.data);
                toast.error(error.response.data.error || "Login failed");
            } else {
                toast.error("An unexpected error occurred");
                console.log("An unexpected error occurred", error);
            }
        }
    };


    return { handleLogin, handleRegister };
};

export default useUser;
