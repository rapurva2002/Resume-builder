import React from "react";

import {
  Column,
  Text,
  Grid,
  Input,
  Row,
  Stack,
  Img,
  CheckBox,
  Button,
} from "components";

const RegistrationPage = () => {
  return (
    <>
      <Column
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-dmsans justify-center mx-[auto] sm:p-[15px] md:p-[17px] p-[25px] w-[100%]"
        style={{ backgroundImage: "url('images/img_registration.png')" }}
      >
        <Column className="bg-gray_50 flex flex-col justify-center max-w-[600px] mx-[auto] md:my-[119px] my-[173px] sm:my-[92px] sm:p-[15px] md:p-[17px] p-[25px] sm:px-[15px] rounded-radius24 w-[100%]">
          <Text
            className="font-bold sm:mt-[30px] md:mt-[39px] mt-[58px] text-gray_900 tracking-ls08 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            as="h4"
            variant="h4"
          >
            Create account
          </Text>
          <Column className="flex flex-col items-center justify-start sm:mb-[33px] md:mb-[43px] mb-[63px] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Column className="flex flex-col font-dmsans items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[99%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Grid className="sm:gap-[11px] md:gap-[15px] gap-[22.4px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls030000001907348633 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body6"
                      >
                        Username
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[33px] md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                        name="RectangleThree"
                        placeholder=""
                      ></Input>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls030000001907348633 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body6"
                      >
                        Email ID
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[33px] md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                        name="RectangleThree One"
                        placeholder=""
                      ></Input>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Text
                        className="ml-[3px] not-italic text-gray_900 tracking-ls030000001907348633 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body6"
                      >
                        {" "}
                        First Name
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[33px] md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                        name="RectangleThree Two"
                        placeholder=""
                      ></Input>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls030000001907348633 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body6"
                      >
                        Last Name
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[33px] md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                        name="RectangleThree Three"
                        placeholder=""
                      ></Input>
                    </Column>
                  </Grid>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                    <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls030000001907348633 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body6"
                      >
                        Phone Number
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[33px] md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                        name="RectangleThree Four"
                        placeholder=""
                      ></Input>
                    </Column>
                    <Column className="flex flex-col font-poppins justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_900 tracking-ls019756750106811524 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        <span className="text-gray_900 text-[15px] font-dmsans">
                          Date of birth{" "}
                        </span>
                        <span className="text-gray_900 text-[10px] font-dmsans">
                          (MM/DD/YY)
                        </span>
                      </Text>
                      <Stack className="border-bw071 border-gray_900 border-solid h-[33px] sm:mt-[3px] md:mt-[4px] mt-[6px] p-[10px] sm:p-[5px] md:p-[6px] relative rounded-radius353 w-[100%]">
                        <Img
                          src="images/img_calendar.svg"
                          className="absolute h-[11px] inset-y-[0] max-w-[100%] my-[auto] right-[4%] w-[4%]"
                          alt="calendar"
                        />
                      </Stack>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                    <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls030000001907348633 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body6"
                      >
                        Password
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[33px] md:mt-[3px] mt-[5px] sm:mt-[2px] w-[100%]"
                        name="RectangleThree Five"
                        placeholder=""
                      ></Input>
                    </Column>
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="not-italic text-gray_902 tracking-ls030000001907348633 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body6"
                      >
                        Confirm password
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[33px] mt-[2px] w-[100%]"
                        name="RectangleThree Six"
                        placeholder=""
                      ></Input>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[4px] ml-[6px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <CheckBox
                  className="font-dmsans font-normal mb-[11px] sm:mb-[5px] md:mb-[7px] not-italic sm:pl-[4px] md:pl-[5px] pl-[8px] text-[15px] text-gray_900 tracking-ls03 md:tracking-ls11 sm:tracking-ls11"
                  inputClassName="h-[14.11px] mr-[5px] w-[14.11px]"
                  name="Rememberme"
                  label="Remember me"
                ></CheckBox>
                <Text
                  className="font-normal font-poppins mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_50 tracking-ls019756752014160156 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Forgot password?
                </Text>
              </Row>
              <CheckBox
                className="font-normal font-poppins sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic sm:pl-[4px] md:pl-[5px] pl-[8px] text-[15px] text-gray-800 tracking-ls03 md:tracking-ls11 sm:tracking-ls11"
                inputClassName="h-[14.11px] mr-[5px] w-[14.11px]"
                name="Iagreetoall"
                label="I agree to all the Terms and Privacy policy "
                size="sm"
                variant="OutlineGray900_1"
              ></CheckBox>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center justify-between md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                <Button
                  className="cursor-pointer font-semibold mb-[1px] min-w-[48%] text-[9.88px] text-center tracking-ls019756750106811524 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                  shape="RoundedBorder3"
                  size="sm"
                  variant="FillLightblueA700"
                >
                  Create account
                </Button>
                <Row className="bg-gray-800 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[1px] sm:mx-[0] sm:p-[4px] md:p-[6px] p-[9px] rounded-radius353 sm:w-[100%] w-[48%]">
                  <Img
                    src="images/img_iconfindergoog.png"
                    className="flex-shrink-0 md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] sm:ml-[29px] md:ml-[38px] ml-[56px] my-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                    alt="iconfinderGoog"
                  />
                  <Text
                    className="flex-grow font-semibold sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mr-[31px] md:mr-[40px] mr-[59px] text-white_A700 tracking-ls019756750106811524 md:tracking-ls11 sm:tracking-ls11"
                    as="h1"
                    variant="h1"
                  >
                    Sign-in with google
                  </Text>
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default RegistrationPage;
