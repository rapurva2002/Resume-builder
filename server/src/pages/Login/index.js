import React from "react";

import { Column, Text, Row, Button, Img, Input } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfully.");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login.");
    },
  });

  return (
    <>
      <Column
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-dmsans items-end justify-center mx-[auto] sm:p-[15px] md:p-[25px] p-[37px] w-[100%]"
        style={{ backgroundImage: "url('images/img_login.png')" }}
      >
        <Column className="bg-gray_50 flex flex-col items-center justify-start max-w-[528px] mx-[auto] md:my-[119px] my-[173px] sm:my-[92px] sm:p-[15px] md:p-[27px] p-[40px] sm:px-[15px] rounded-radius24 shadow-bs1 w-[100%]">
          <Text
            className="font-bold text-gray_901 w-[auto]"
            as="h4"
            variant="h4"
          >
            Login
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
            <Button
              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder8"
              size="smIcn"
              variant="icbFillGray50"
            >
              <Img
                src="images/img_linkedin.svg"
                className="h-[28px] sm:h-[15px] md:h-[20px] flex items-center justify-center"
                alt="linkedin"
              />
            </Button>
            <Button
              className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[25px] md:w-[33px] w-[48px]"
              shape="icbRoundedBorder8"
              size="smIcn"
              variant="icbFillGray50"
            >
              <Img
                src="images/img_facebook.svg"
                className="h-[28px] sm:h-[15px] md:h-[20px] flex items-center justify-center"
                alt="facebook"
              />
            </Button>
            <Button
              className="common-pointer flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[25px] md:w-[33px] w-[48px]"
              onClick={googleSignIn}
              shape="icbRoundedBorder8"
              size="smIcn"
              variant="icbFillGray50"
            >
              <Img
                src="images/img_google.svg"
                className="h-[28px] sm:h-[15px] md:h-[20px] flex items-center justify-center"
                alt="google"
              />
            </Button>
          </Row>
          <Column className="flex flex-col font-outfit items-center justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <Text
              className="flex items-center not-italic text-gray_901 w-[auto]"
              variant="body7"
            >
              or
            </Text>
            <Column className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
              <Column className="flex flex-col font-dmsans items-center justify-start w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_900_b7 text-gray_900_b7 w-[100%]"
                  wrapClassName="flex w-[100%]"
                  type="email"
                  name="InputTextFiel"
                  placeholder="Enter Your Email Address"
                  prefix={
                    <Img
                      src="images/img_input_icons.svg"
                      className="ml-[13px] mr-[8px] sm:mr-[4px] sm:ml-[6px] md:mr-[5px] md:ml-[8px] my-[auto]"
                      alt="Input/Icons"
                    />
                  }
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineGray9007a"
                ></Input>
                <Row className="border border-gray_900_7a border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_lock.svg"
                    className="sm:h-[20px] md:h-[25px] h-[36px] max-w-[100%] my-[4px] sm:w-[19px] md:w-[24px] w-[36px]"
                    alt="lock"
                  />
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[73%]">
                        <Text
                          className="font-normal not-italic text-gray_900_b7 w-[auto]"
                          variant="body5"
                        >
                          Enter your Password
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                        <Img
                          src="images/img_signal.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="signal"
                        />
                        <Img
                          src="images/img_warning.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="warning"
                        />
                        <Img
                          src="images/img_eye.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="eye"
                        />
                      </Row>
                    </Row>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="sm:h-[23px] md:h-[29px] h-[42px] rounded-radius50 sm:w-[22px] md:w-[28px] w-[42px]"
                      alt="checkmark"
                    />
                    <Text
                      className="flex-grow font-normal not-italic text-gray_901"
                      variant="body5"
                    >
                      Remember Me
                    </Text>
                  </Row>
                  <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] rounded-radius8 sm:w-[100%] w-[46%]">
                    <Text
                      className="capitalize font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-blue_A700 tracking-ls036 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body4"
                    >
                      Forget Password?
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Button
                className="capitalize cursor-pointer font-outfit font-semibold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-center tracking-ls036 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                shape="RoundedBorder8"
                size="sm"
                variant="FillBlueA700"
              >
                Login
              </Button>
            </Column>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-outfit items-center justify-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
            <Text
              className="font-normal not-italic text-gray_901 w-[auto]"
              variant="body5"
            >
              New Member?
            </Text>
            <Column className="flex flex-col items-center ml-[12px] md:ml-[8px] sm:mx-[0] p-[3px] sm:px-[0] rounded-radius8 sm:w-[100%] w-[37%]">
              <Text
                className="capitalize font-semibold sm:mt-[3px] md:mt-[4px] mt-[6px] text-blue_A700 tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body5"
              >
                Signup
              </Text>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
