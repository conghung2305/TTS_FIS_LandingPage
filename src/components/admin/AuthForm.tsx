import { Button, Form, Input, Space } from "antd";
import { CiUser, CiLock } from "react-icons/ci";
import { UserInput } from "../interface/User";

import { useState } from "react";

type AuthFormProps = {
    onSubmit: (data: UserInput) => void;
}

const AuthForm = ({ onSubmit }: AuthFormProps) => {
    const [formData, setFormData] = useState<UserInput>({
        email: "",
        password: "",
    });
    const handleOnChange = (valueChange: string, nameChange: 'email' | 'password') => {
        const data: UserInput = { ...formData };
        data[`${nameChange}`] = valueChange;
        console.log("data", data)
        setFormData(data);
    }
    const onFinish = (value: UserInput) => {
        onSubmit(value)
        console.log("value:", value);
    }
    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center"
            style={{
                background: 'linear-gradient(108.29deg, #00579B 0%, #51A0FD 0.01%, #606AEE 96.79%)'
            }}
        >
            <div className="mb-0 flex items-center justify-center w-16 h-16 rounded-full border-2 bg-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-teal-500" // Điều chỉnh kích thước icon
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                </svg>
            </div>
            <div className="text-center mb-2">
                <span className="text-white">Cổng thông tin ứng dụng doanh nghiệp</span><br />
                <span className="text-white">Enterprise's Internal Portal</span>
            </div>
            <div className="text-center bg-white w-fit p-5 rounded-2xl mt-2">
                <Form layout="vertical" autoComplete="off" onFinish={onFinish} >
                    <Form.Item
                        name="email"
                        label="Tên đăng nhập/Username"
                        rules={[{ required: true }]}
                    >
                        <div> {/* Bọc bằng một div */}
                            <Input
                                name="email"
                                placeholder="Nhập tên đăng nhập"
                                value={formData.email}
                                onChange={(e: any) => handleOnChange(e.target.value, e.target.name)}
                                suffix={<CiUser className="text-gray-500" />}
                                className="rounded-md"
                            // {...register("email")}// Kết nối react-hook-form với Input
                            />


                        </div>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu/Password"
                        rules={[{ required: true }]}
                    >
                        <div> {/* Bọc bằng một div */}
                            <Input
                                name="password"
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={formData.password}
                                onChange={(e: any) => handleOnChange(e.target.value, e.target.name)}
                                suffix={<CiLock className="text-gray-500" />}
                                className="rounded-md mb-0"
                            // {...register('password')} // Kết nối react-hook-form với Input
                            />
                            <a className="text-xs block font-semibold text-blue-800 mt-1 text-left">
                                Quên mật khẩu/Forgot Password
                            </a>
                        </div>

                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button
                                htmlType="button"
                                style={{
                                    background: 'linear-gradient(108.29deg, #00579B 0%, #51A0FD 0.01%, #606AEE 96.79%)'
                                }}
                                className="rounded-2xl"
                            >
                                Đăng nhập bằng SSO
                            </Button>
                            <Button
                                htmlType="submit"
                                style={{
                                    background: 'linear-gradient(108.29deg, #00579B 0%, #51A0FD 0.01%, #606AEE 96.79%)'
                                }}
                                className="rounded-2xl"
                            >
                                Đăng nhập
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AuthForm;
