import styled from "styled-components";

export const ContentContainer = styled.section`
  width: 600px;
  margin: 0 auto;
  color: #fff;
  background-color: #393E46;

  p {
    font-size: 1.6rem;
    width: 100%;
    padding: 3rem;
  }
`;

export const QuantityBox = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;

  label {
    font-size: 1.4rem;
    color: #fff;
  }

  input {
    width: 4rem;
    padding: .2rem .6rem;
    margin: 0 1rem;
  }

  button {
    font-size: 1.4rem;
    border-radius: .2rem;
    padding: .2rem .6rem;
    color: #fff;
    background: #393E46;
  }
`;