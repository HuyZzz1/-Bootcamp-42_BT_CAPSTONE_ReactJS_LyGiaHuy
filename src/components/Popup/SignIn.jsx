import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Button, Form, Input, Avatar, Modal } from "antd";
import { formValidate } from "../../services/helper";
import { UserOutlined } from "@ant-design/icons";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { ShowError, ShowSuccess } from "../Message";
import { apiSignIn } from "../../services/request/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/movieSlice";

const SignIn = (_, ref) => {
  const navigation = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const signUpRef = useRef();
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalOpen(true);
    },
  }));

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const data = await apiSignIn({
        taiKhoan: values.account,
        matKhau: values.password,
      });
      dispatch(setUser(data?.content));
      localStorage.setItem(
        "ACCESS_TOKEN",
        JSON.stringify(data.content.accessToken)
      );
      setIsLoading(false);
      setIsModalOpen(false);
      ShowSuccess("Đăng nhập thành công");
      navigation(1);
      form.resetFields();
    } catch (error) {
      setIsLoading(false);
      ShowError(error?.response?.data?.content);
      form.resetFields();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SignUp ref={signUpRef} />
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width={500}
        footer={null}
        destroyOnClose
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              size={45}
              style={{ backgroundColor: "#1677ff" }}
              icon={<UserOutlined />}
            />

            <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
          </div>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label={<p style={{ fontWeight: 500, fontSize: 15 }}>Tài khoản</p>}
              rules={[formValidate.required]}
              name="account"
            >
              <Input placeholder="Tài khoản" />
            </Form.Item>
            <Form.Item
              label={<p style={{ fontWeight: 500, fontSize: 15 }}>Mật khẩu</p>}
              rules={[formValidate.required]}
              name="password"
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Button
              htmlType="submit"
              size="large"
              type="primary"
              style={{ width: "100%" }}
              disabled={isLoading}
            >
              Đăng nhập
            </Button>
          </Form>
          <div style={{ textAlign: "end", marginTop: 10 }}>
            <p
              style={{
                fontWeight: 500,
                color: "#1677ff",
                display: "inline",
                borderBottom: "1px solid #1677ff",
                cursor: "pointer",
              }}
              onClick={() => {
                signUpRef.current.open();
                setIsModalOpen(false);
              }}
            >
              Bạn chưa có tài khoản? Đăng kí
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(SignIn);
