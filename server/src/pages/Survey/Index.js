
import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Stack,
  Slider,
  Img,
  PagerIndicator,
} from "components";

const ScreenThreePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 flex flex-col items-center justify-end mx-[auto] sm:pt-[15px] md:pt-[30px] pt-[45px] w-[100%]">
        <Column className="flex flex-col items-center justify-end w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1359px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Text
              className="font-dmserifdisplay mt-[1px] not-italic text-black_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              ResumePlus+
            </Text>
            <Text
              className="capitalize font-dmsans sm:ml-[128px] md:ml-[165px] ml-[241px] md:mt-[11px] mt-[17px] sm:mt-[9px] text-gray_900 tracking-ls05333333611488342 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              Create Template
            </Text>
            <Text
              className="capitalize font-dmsans sm:ml-[41px] md:ml-[53px] ml-[78px] md:mt-[11px] mt-[17px] sm:mt-[9px] text-gray_900 tracking-ls05333333611488342 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              Jobs
            </Text>
            <Text
              className="capitalize font-dmsans sm:ml-[39px] md:ml-[50px] ml-[74px] md:mt-[11px] mt-[17px] sm:mt-[9px] text-gray_900 tracking-ls05333333611488342 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              contact us
            </Text>
            <Button
              className="cursor-pointer font-medium font-roboto min-w-[15%] sm:ml-[51px] md:ml-[66px] ml-[97px] sm:text-[20px] md:text-[22px] text-[24px] text-center uppercase w-[max-content]"
              shape="CircleBorder33"
              size="lg"
              variant="FillBlue700"
            >
              Log in
            </Button>
          </Row>
          <Stack className="h-[1307px] md:mt-[11px] mt-[17px] sm:mt-[9px] relative w-[100%]">
            <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Stack className="h-[766px] relative w-[100%]">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    slidesToShow={1}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="absolute w-[100%]"
                    items={[...Array(5)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Img
                          src="images/img_bg.png"
                          className="max-w-[100%]"
                          alt="bg"
                        />
                      </React.Fragment>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer rounded-radius50 w-[16px] h-[16px] bg-deep_purple_A200" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_500"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                  <Column className="absolute bottom-[15%] flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[13%] sm:w-[100%] w-[65%]">
                    <Text
                      className="font-dmsans font-normal not-italic text-black_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      An excellent Resume has the power to open doors
                    </Text>
                    <Text
                      className="font-dmsans leading-[normal] md:ml-[33px] ml-[48px] sm:mt-[36px] md:mt-[46px] mt-[68px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[87%]"
                      as="h3"
                      variant="h3"
                    >
                      Grab the attention of employers and recruiters using
                      ResumePlus.
                    </Text>
                    <Button
                      className="cursor-pointer font-medium font-roboto min-w-[33%] sm:ml-[117px] md:ml-[151px] ml-[220px] sm:mr-[216px] md:mr-[279px] mr-[406px] sm:mt-[43px] md:mt-[55px] mt-[81px] sm:text-[26px] md:text-[28px] text-[30px] text-center uppercase w-[max-content]"
                      shape="RoundedBorder20"
                      size="xl"
                      variant="OutlineIndigo200"
                    >
                      REGISTER
                    </Button>
                  </Column>
                </Stack>
                <div className="bg-black_900 h-[128px] sm:h-[69px] md:h-[89px] mt-[4px] w-[100%]"></div>
              </Column>
            </Column>
            <Column className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mb-[225px] md:mb-[291px] mb-[424px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[18%]">
                <Stack className="h-[40px] sm:p-[4px] md:p-[5px] p-[8px] relative sm:w-[21px] md:w-[27px] w-[40px]">
                  <Img
                    src="images/img_arrowleft_gray_50.svg"
                    className="absolute h-[24px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="arrowleft"
                  />
                </Stack>
                <PagerIndicator
                  className="h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[100%] w-[max-content]"
                  count={5}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[16px] h-[16px] bg-deep_purple_A200"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_500"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                  unselectedWrapperCss="inline-block md:mx-[3px] mx-[5.00px] sm:mx-[2px]"
                />
                <Stack className="h-[40px] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:p-[4px] md:p-[5px] p-[8px] relative sm:w-[21px] md:w-[27px] w-[40px]">
                  <Img
                    src="images/img_arrowright_gray_500.svg"
                    className="absolute h-[24px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="arrowright"
                  />
                </Stack>
              </Row>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default ScreenThreePage;
