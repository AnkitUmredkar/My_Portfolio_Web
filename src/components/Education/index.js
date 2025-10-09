import React from "react";
import styled from "styled-components";
import { education } from "../../data/constant";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { EducationCard } from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
  z-index: 1;
  align-items: center;
  margin-top: 20px;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.{" "}
        </Desc>

        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                 <EducationCard education={education}> h1</EducationCard>
                </TimelineContent>

                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
