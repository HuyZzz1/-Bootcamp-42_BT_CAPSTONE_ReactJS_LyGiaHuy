import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button, Form, Input, Avatar, Modal } from "antd";
import { formValidate } from "../../../services/helper";
import { UserOutlined } from "@ant-design/icons";
import { apiSignUp } from "../../../services/request/api";
import { ShowSuccess, ShowError } from "../../Message";

const SignUp = (_, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalOpen(true);
    },
  }));

  const onFinish = async (values) => {
    try {
      await apiSignUp({
        taiKhoan: values.account,
        matKhau: values.password,
        email: values.email,
        hoTen: values.name,
      });
      ShowSuccess("Đăng kí thành công");
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      ShowError(error?.response?.data?.content);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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

            <h2 style={{ textAlign: "center" }}>Đăng kí</h2>
          </div>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label={<p style={{ fontWeight: 500, fontSize: 15 }}>Họ tên</p>}
              rules={[formValidate.required]}
              name="name"
            >
              <Input placeholder="Họ tên" />
            </Form.Item>
            <Form.Item
              label={<p style={{ fontWeight: 500, fontSize: 15 }}>Tài khoản</p>}
              rules={[formValidate.required]}
              name="account"
            >
              <Input placeholder="Tài khoản" />
            </Form.Item>
            <Form.Item
              label={<p style={{ fontWeight: 500, fontSize: 15 }}>Email</p>}
              rules={[formValidate.email, formValidate.required]}
              name="email"
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label={<p style={{ fontWeight: 500, fontSize: 15 }}>Mật khẩu</p>}
              rules={[formValidate.required]}
              name="password"
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label={
                <p style={{ fontWeight: 500, fontSize: 15 }}>
                  Xác nhận mật khẩu
                </p>
              }
              dependencies={["password"]}
              hasFeedback
              rules={[
                formValidate.required,
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Xác nhận mật khẩu" />
            </Form.Item>
            <Button
              htmlType="submit"
              size="large"
              type="primary"
              style={{ width: "100%" }}
            >
              Đăng kí
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default forwardRef(SignUp);
