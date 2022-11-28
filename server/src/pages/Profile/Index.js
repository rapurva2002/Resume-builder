import React from "react";

import { Column, Row, Text, Stack, Input, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const ProfilePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-dmsans justify-end mx-[auto] pr-[116px] sm:pr-[15px] md:pr-[79px] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1324px] mx-[auto] sm:px-[15px] w-[100%]">
          <Sidebar className="w-[21%]" />
          <Column className="flex flex-col justify-start md:ml-[61px] ml-[90px] mt-[104px] sm:mt-[55px] md:mt-[71px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
            <Text
              className="text-black_900 tracking-ls096 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
              as="h2"
              variant="h2"
            >
              Profile
            </Text>
            <Stack className="h-[650px] sm:mt-[34px] md:mt-[44px] mt-[64px] relative w-[100%]">
              <Column className="absolute flex flex-col items-center justify-start left-[0] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[48%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body3"
                      >
                        First Name
                      </Text>
                      <div className="sm:h-[20px] md:h-[26px] h-[37px] mb-[14px] sm:mb-[7px] md:mb-[9px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 sm:w-[100%] w-[89%]"></div>
                    </Column>
                    <Column className="flex flex-col justify-start md:ml-[46px] ml-[68px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body3"
                      >
                        Last Name
                      </Text>
                      <div className="sm:h-[20px] md:h-[26px] h-[37px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 w-[100%]"></div>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                    <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body3"
                      >
                        Contact
                      </Text>
                      <div className="sm:h-[20px] md:h-[26px] h-[37px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 w-[100%]"></div>
                    </Column>
                    <Column className="flex flex-col justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                      <Text
                        className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body3"
                      >
                        Email ID
                      </Text>
                      <div className="sm:h-[20px] md:h-[26px] h-[37px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 w-[100%]"></div>
                    </Column>
                    <Column className="flex flex-col font-poppins justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                      <Text
                        className="font-normal ml-[1px] not-italic text-gray_900 tracking-ls019756750106811524 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        <span className="text-gray_900 text-[24px] font-dmsans sm:text-[20px] md:text-[22px]">
                          Date of birth
                        </span>
                        <span className="text-gray_900 text-[16px] font-dmsans">
                          {" "}
                        </span>
                        <span className="text-gray_900 text-[16px] font-dmsans">
                          (MM/DD/YY)
                        </span>
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[37px] md:mt-[6px] mt-[9px] sm:mt-[4px] w-[100%]"
                        name="RectangleTen"
                        placeholder=""
                        variant="OutlineBlack900"
                      ></Input>
                    </Column>
                  </Row>
                  <Column className="flex flex-col justify-start sm:mt-[27px] md:mt-[35px] mt-[51px] sm:px-[0] w-[100%]">
                    <Text
                      className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      variant="body3"
                    >
                      Address
                    </Text>
                    <div className="sm:h-[20px] md:h-[26px] h-[37px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 w-[100%]"></div>
                  </Column>
                  <List
                    className="sm:gap-[25px] md:gap-[33px] gap-[48.18px] min-h-[auto] mt-[139px] sm:mt-[74px] md:mt-[95px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body3"
                        >
                          Lindkedin
                        </Text>
                        <div className="sm:h-[20px] md:h-[26px] h-[37px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 sm:w-[100%] w-[97%]"></div>
                      </Column>
                      <Column className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body3"
                        >
                          Github
                        </Text>
                        <div className="sm:h-[20px] md:h-[26px] h-[37px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 w-[100%]"></div>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body3"
                        >
                          Facebook
                        </Text>
                        <div className="sm:h-[20px] md:h-[26px] h-[37px] sm:mt-[4px] md:mt-[5px] mt-[8px] outline outline-[0.71px] outline-black_900 rounded-radius353 sm:w-[100%] w-[97%]"></div>
                      </Column>
                      <Column className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[7px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-gray_900 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                          variant="body3"
                        >
                          Instagrm
                        </Text>
                        <div className="sm:h-[20px] md:h-[26px] h-[37px] mt-[2px] outline outline-[0.71px] outline-black_900 rounded-radius353 sm:w-[100%] w-[97%]"></div>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Text
                className="absolute bottom-[38%] font-normal left-[0] not-italic text-black_900 tracking-ls064 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                as="h6"
                variant="h6"
              >
                Social Media
              </Text>
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ProfilePage;
