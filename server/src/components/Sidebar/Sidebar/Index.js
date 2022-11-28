import React from "react";

import { Column, Text, Row, Stack, Img, Button } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="flex flex-col items-center justify-start sm:pb-[167px] md:pb-[216px] pb-[314px] w-[100%]">
            <Column
              className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[15px] md:p-[21px] p-[31px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group2.png')" }}
            >
              <Column className="flex flex-col justify-start sm:mb-[148px] md:mb-[192px] mb-[279px] sm:mt-[25px] md:mt-[32px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <Text
                  className="font-dmserifdisplay ml-[1px] not-italic text-gray_50 w-[auto]"
                  variant="body1"
                >
                  ResumePlus+
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[4px] md:mt-[109px] mt-[159px] sm:mt-[84px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                  <Stack
                    className="bg-cover bg-no-repeat h-[31px] relative sm:w-[16px] md:w-[21px] w-[31px]"
                    style={{ backgroundImage: "url('images/img_group1.png')" }}
                  >
                    <Img
                      src="images/img_homeicon.png"
                      className="absolute h-[31px] max-w-[100%] sm:w-[16px] md:w-[21px] w-[31px]"
                      alt="HomeIcon"
                    />
                  </Stack>
                  <Text
                    className="font-bold font-dmsans mb-[1px] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_50 w-[auto]"
                    variant="body4"
                  >
                    Home
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                  <Img
                    src="images/img_user_24X24.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="user"
                  />
                  <Text
                    className="flex-grow font-poppins font-semibold sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[4px] text-gray_900"
                    variant="body4"
                  >
                    Profile
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[1px] sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                  <Img
                    src="images/img_location.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="location"
                  />
                  <Text
                    className="flex-grow font-poppins font-semibold sm:ml-[11px] md:ml-[15px] ml-[22px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_50"
                    variant="body4"
                  >
                    Survey
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mt-[30px] md:mt-[39px] mt-[58px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                  <Img
                    src="images/img_mail.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="mail"
                  />
                  <Text
                    className="flex-grow font-poppins font-semibold sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[4px] text-gray_50"
                    variant="body4"
                  >
                    Templates
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                  <Img
                    src="images/img_settings.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="settings"
                  />
                  <Text
                    className="flex-grow font-poppins font-semibold sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[4px] text-gray_50"
                    variant="body4"
                  >
                    Resume
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[32px] md:mt-[41px] mt-[61px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_settings.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="settings One"
                  />
                  <Text
                    className="flex-grow font-poppins font-semibold sm:ml-[11px] md:ml-[15px] ml-[22px] mt-[3px] text-gray_50"
                    variant="body4"
                  >
                    Application
                  </Text>
                </Row>
              </Column>
            </Column>
            <Button
              className="flex items-center justify-center md:mt-[50px] min-w-[59%] mt-[73px] sm:mt-[38px] text-center w-[max-content]"
              leftIcon={
                <Img
                  src="images/img_arrowright.svg"
                  className="mr-[20px] sm:mr-[10px] md:mr-[13px] text-center"
                  alt="arrow_right"
                />
              }
              shape="RoundedBorder14"
              size="md"
              variant="FillWhiteA700"
            >
              <div className="bg-transparent cursor-pointer font-poppins font-semibold text-[18px]">
                Logout
              </div>
            </Button>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
