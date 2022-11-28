import React from "react";

import { Column, Row, Text, Button, Img } from "components";

const ScreenOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-dmsans items-center justify-end mx-[auto] sm:pt-[15px] md:pt-[30px] pt-[45px] w-[100%]">
        <Column className="flex flex-col justify-start w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end max-w-[859px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Text
              className="capitalize font-dmsans text-gray_900 tracking-ls05333333611488342 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              Create Template
            </Text>
            <Text
              className="capitalize font-dmsans sm:ml-[31px] md:ml-[41px] ml-[60px] text-gray_900 tracking-ls05333333611488342 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              Jobs
            </Text>
            <Text
              className="capitalize font-dmsans sm:ml-[43px] md:ml-[56px] ml-[82px] text-gray_900 tracking-ls05333333611488342 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              contact us
            </Text>
            <Button
              className="cursor-pointer font-medium font-roboto min-w-[23%] ml-[107px] sm:ml-[56px] md:ml-[73px] sm:text-[20px] md:text-[22px] text-[24px] text-center uppercase w-[max-content]"
              shape="CircleBorder33"
              size="lg"
              variant="FillBlue700"
            >
              Log in
            </Button>
          </Row>
          <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
            <Column
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:p-[15px] md:p-[55px] p-[80px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group7.png')" }}
            >
              <Column className="flex flex-col items-center justify-start max-w-[1233px] mb-[112px] sm:mb-[59px] md:mb-[77px] sm:mt-[32px] md:mt-[41px] mt-[61px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Column className="flex flex-col items-center justify-start mt-[119px] sm:mt-[63px] md:mt-[81px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Looking for a new job?
                    </Text>
                    <Text
                      className="leading-[normal] sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-black_900 text-center w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      A good resume is a way
                      <br /> to land yours dream job
                    </Text>
                  </Column>
                  <Img
                    src="images/img_vector.png"
                    className="max-w-[100%] sm:w-[100%] w-[48%]"
                    alt="vector"
                  />
                </Row>
              </Column>
            </Column>
            <div className="bg-black_900 h-[128px] sm:h-[69px] md:h-[89px] mt-[4px] w-[100%]"></div>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ScreenOnePage;
