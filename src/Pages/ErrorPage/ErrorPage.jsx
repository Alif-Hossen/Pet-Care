import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const floatMessage = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

// Styled Components
const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1c2c 0%, #928dab 100%);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: ${props => props.top || '10%'};
  left: ${props => props.left || '10%'};
  width: ${props => props.size || '150px'};
  height: ${props => props.size || '150px'};
  background: rgba(255, 255, 255, ${props => props.opacity || '0.1'});
  border-radius: ${props => props.borderRadius || '50%'};
  animation: ${spin} ${props => props.duration || '20s'} linear infinite,
             ${pulse} 3s ease-in-out infinite;
  z-index: 0;
  filter: blur(50px);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  animation: ${fadeIn} 1.5s ease-out forwards;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const ErrorCode = styled.h1`
  font-size: 10rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  letter-spacing: 5px;
  animation: ${floatMessage} 3s ease-in-out infinite;
  color: #ffcc00;

  @media (max-width: 768px) {
    font-size: 7rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
  margin: 10px 0 30px 0;
  font-weight: 300;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GoHomeButton = styled.a`
  display: inline-block;
  background-color: #ff4d4d;
  color: #fff;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  border: none;

  &:hover {
    background-color: #e60000;
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }
`;

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            {/* Background Animations (Shapes) */}
            <BackgroundShape top="5%" left="5%" size="200px" duration="25s" />
            <BackgroundShape top="60%" left="80%" size="120px" duration="18s" borderRadius="30%" opacity="0.15" />
            <BackgroundShape top="30%" left="45%" size="80px" duration="30s" />
            <BackgroundShape top="85%" left="15%" size="180px" duration="22s" opacity="0.1" />

            <ContentWrapper>
                <ErrorCode>404</ErrorCode>
                <ErrorMessage >SORRY.! NO PAGE FOUND</ErrorMessage>
                <GoHomeButton href="/">GO TO HOME PAGE</GoHomeButton>
            </ContentWrapper>
        </ErrorPageContainer>
    );
};

export default ErrorPage;