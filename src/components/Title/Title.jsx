import React from "react";
import { Helmet } from "react-helmet";

const Title = ({ title }) => (
  <Helmet>
    <title>{title} - Xcare</title>
  </Helmet>
);

export default Title;
