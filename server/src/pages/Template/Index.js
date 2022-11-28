import React from "react";

import {
  Stack,
  Slider,
  Row,
  List,
  Img,
  Button,
  Column,
  PagerIndicator,
} from "components";

const TemplatePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-white_A700 font-dmserifdisplay h-[1440px] mx-[auto] relative w-[1440px] sm:w-[767px] md:w-[991px]">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          slidesToShow={2}
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          activeSlideCSS="scale-[1.00] absolute"
          ref={sliderRef}
          className="absolute w-[100%]"
          items={[...Array(8)].map(() => (
            <React.Fragment key={Math.random()}>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[1136px] sm:pl-[0] sm:pr-[15px] md:pr-[24px] pr-[35px] sm:px-[15px] w-[100%]">
                <List
                  className="sm:gap-[11px] md:gap-[15px] gap-[22px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:my-[2px] md:my-[3px] my-[5px] sm:w-[100%] w-[79%]"
                  orientation="horizontal"
                >
                  <Stack className="h-[250px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_screenshot2022.png"
                      className="absolute h-[250px] max-w-[100%] rounded-radius12 w-[100%]"
                      alt="Screenshot2022"
                    />
                  </Stack>
                  <Stack className="h-[250px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_screenshot2022_250X420.png"
                      className="absolute h-[250px] max-w-[100%] rounded-radius12 w-[100%]"
                      alt="Screenshot2022 One"
                    />
                  </Stack>
                </List>
                <Stack className="h-[250px] sm:ml-[11px] md:ml-[15px] ml-[22px] sm:my-[2px] md:my-[3px] my-[5px] relative w-[20%]">
                  <Stack className="absolute h-[250px] left-[0] rounded-radius12 sm:w-[100%] w-[87%]">
                    <Img
                      src="images/img_screenshot2022_250X187.png"
                      className="absolute h-[250px] max-w-[100%] rounded-radius12 w-[100%]"
                      alt="Screenshot2022 Two"
                    />
                  </Stack>
                  <Button
                    className="absolute flex sm:h-[32px] md:h-[42px] h-[60px] inset-y-[0] items-center justify-center my-[auto] right-[0] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                    size="mdIcn"
                    variant="icbOutlineGray100"
                  >
                    <Img
                      src="images/img_arrowright_60X60.svg"
                      className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                </Stack>
              </Row>
            </React.Fragment>
          ))}
          Indicator={({ isActive }) => {
            if (isActive) {
              return (
                <div className="inline-block cursor-pointer rounded-radius50 w-[13px] h-[13px] bg-black_900" />
              );
            }
            return (
              <div
                className="inline-block cursor-pointer rounded-radius50 w-[13px] h-[13px] bg-gray_400"
                role="button"
                tabIndex={0}
              />
            );
          }}
        />
        <Column className="absolute flex flex-col items-center justify-start max-w-[1166px] pr-[135px] sm:pr-[15px] md:pr-[92px] pt-[135px] sm:pt-[71px] md:pt-[92px] sm:px-[15px] right-[0] top-[29%] w-[100%]">
          <Button
            className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
            size="mdIcn"
            variant="icbOutlineGray100"
          >
            <Img
              src="images/img_arrowleft.svg"
              className="h-[18px] sm:h-[10px] md:h-[13px] flex items-center justify-center"
              alt="arrowleft"
            />
          </Button>
          <PagerIndicator
            className="h-[13px] mt-[135px] sm:mt-[71px] md:mt-[92px] w-[max-content]"
            count={4}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[13px] h-[13px] bg-black_900"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[13px] h-[13px] bg-gray_400"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block md:mx-[4px] mx-[6.50px] sm:mx-[3px]"
            unselectedWrapperCss="inline-block md:mx-[4px] mx-[6.50px] sm:mx-[3px]"
          />
        </Column>
      </Stack>
    </>
  );
};

export default TemplatePage;
