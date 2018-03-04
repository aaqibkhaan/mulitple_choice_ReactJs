// @flow

import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`from { transform: rotate(0deg);} to {transform: rotate(360deg);}`;

const Image = styled.img`
	animation: ${spin} 4s infinite linear;
`;

const Spinner = () => <Image className="spinner" src="/public/img/loading.png" alt="loading image" />;

export default Spinner;