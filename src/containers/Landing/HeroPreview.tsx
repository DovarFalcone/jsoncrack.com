import React from "react";
import { AspectRatio, Flex, Paper, SegmentedControl, Stack } from "@mantine/core";
import styled from "styled-components";

const StyledPreviewWrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const HeroPreview = () => {
  const [selectedFeature, setSelectedFeature] = React.useState("1");

  return (
    <StyledPreviewWrapper id="preview">
      <Flex
        gap="lg"
        direction={{
          base: "column",
          xs: "row",
        }}
        mx="auto"
        w="85%"
      >
        <Stack>
          <SegmentedControl
            data={[
              {
                label: "Fast & Compact",
                value: "1",
              },
              {
                label: "Search",
                value: "2",
              },
              {
                label: "Edit",
                value: "3",
              },
              {
                label: "Customize",
                value: "5",
              },
              {
                label: "Compare",
                value: "6",
              },
              {
                label: "AI-Powered Assistant",
                value: "7",
              },
            ]}
            value={selectedFeature}
            onChange={setSelectedFeature}
            orientation="vertical"
            withItemsBorders={false}
            color="grape"
            bg="transparent"
            size="lg"
            visibleFrom="sm"
            styles={{
              control: {
                background: "#8f8f8f52",
                borderRadius: "4px",
              },
              root: {
                gap: "24px",
              },
            }}
          />
        </Stack>

        <Paper
          p={0}
          w="100%"
          h="fit-content"
          radius="md"
          shadow="xl"
          bg="transparent"
          style={{
            overflow: "hidden",
            border: "1px solid #c1c1c1",
            outline: "1px solid #c1c1c1",
            outlineOffset: "4px",
          }}
        >
          <AspectRatio ratio={1440 / 760} maw={1440} h="100%">
            <video
              autoPlay
              muted
              loop
              preload="auto"
              style={{
                display: "block",
              }}
              key={selectedFeature}
            >
              <source src={`./assets/videos/p${selectedFeature}.mp4`} type="video/mp4" />
            </video>
          </AspectRatio>
        </Paper>
      </Flex>
    </StyledPreviewWrapper>
  );
};