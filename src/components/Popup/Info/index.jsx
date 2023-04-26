import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Button, Form, Input, Table, Row, Col, Space, Tabs } from "antd";
import SignUp from "../SignUp";
import { useSelector } from "react-redux";
import { StyledModal } from "./styled";
import { column } from "./column";
import { updateUser, apiGetUser } from "../../../services/request/api";
import { ShowSuccess, ShowError } from "../../Message";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/appSlice";

const Info = (_, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.app.user);
  const [form] = Form.useForm();
  const signUpRef = useRef();

  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsModalOpen(true);
      form.setFieldsValue({
        name: user.hoTen,
        email: user.email,
        account: user.taiKhoan,
        password: user.matKhau,
      });
    },
  }));

  const getInfoUser = async () => {
    const data = await apiGetUser();
    dispatch(getUser(data.content));
  };

  const onFinish = async (values) => {
    try {
      await updateUser({
        taiKhoan: values.account,
        email: values.email,
        hoTen: values.name,
        password: values ? values.password : user.matKhau,
      });
      getInfoUser();
      ShowSuccess("Cập nhật thành công");
    } catch (error) {
      ShowError(error?.response?.data?.content);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SignUp ref={signUpRef} />
      <StyledModal
        open={isModalOpen}
        onCancel={handleCancel}
        width="70%"
        footer={null}
        destroyOnClose
        title={<h3>Thông tin tài khoản</h3>}
      >
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: "Thông tin cá nhân",
              children: (
                <Form
                  layout="vertical"
                  form={form}
                  onFinish={onFinish}
                  style={{ width: "100%" }}
                >
                  <Row gutter={[12, 12]} style={{ width: "100%" }}>
                    <Col sm={24} lg={12}>
                      <Form.Item
                        label={
                          <p style={{ fontWeight: 500, fontSize: 15 }}>
                            Họ tên
                          </p>
                        }
                        name="name"
                      >
                        <Input placeholder="Tài khoản" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} lg={12}>
                      <Form.Item
                        label={
                          <p style={{ fontWeight: 500, fontSize: 15 }}>Email</p>
                        }
                        name="email"
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} lg={12}>
                      <Form.Item
                        label={
                          <p style={{ fontWeight: 500, fontSize: 15 }}>
                            Tài khoản
                          </p>
                        }
                        name="account"
                      >
                        <Input placeholder="Tài khoản" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} lg={12}>
                      <Form.Item
                        label={
                          <p style={{ fontWeight: 500, fontSize: 15 }}>
                            Mật khẩu
                          </p>
                        }
                        name="password"
                      >
                        <Input.Password placeholder="Mật khẩu" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Space
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        <Button
                          htmlType="submit"
                          size="large"
                          type="primary"
                          style={{ width: "100px" }}
                        >
                          Lưu
                        </Button>
                        <Button
                          size="large"
                          type="primary"
                          style={{ width: "100px" }}
                          onClick={handleCancel}
                        >
                          Đóng
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Form>
              ),
            },
            {
              key: "2",
              label: "Lịch sử đặt vé",
              children: (
                <Table
                  size="small"
                  columns={column()}
                  dataSource={user.thongTinDatVe}
                  pagination={{
                    position: ["bottomCenter"],
                  }}
                  scroll={{ x: 1200 }}
                />
              ),
            },
          ]}
        />
      </StyledModal>
    </>
  );
};

export default forwardRef(Info);
