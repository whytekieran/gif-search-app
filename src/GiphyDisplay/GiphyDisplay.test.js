import React from "react";
import { mount } from "enzyme";
import GiphyDisplay from "./GiphyDisplay";
import { Button } from "@material-ui/core";

const getGiphyDisplayWrapper = (overrideProps) =>
  mount(<GiphyDisplay {...overrideProps} />);

describe("Render giphy display", () => {
  it("should render successfully", () => {
    const gifs = [
      {
        id: "fakeid",
        username: "fakeusername",
        images: { original: { url: "fakeSrcUrl" } },
      },
    ];
    const loading = false;
    const searchWord = "";
    const handleChange = jest.fn();
    const handleClick = jest.fn();
    const overrideProps = {
      gifs,
      loading,
      searchWord,
      handleChange,
      handleClick,
    };

    const wrapper = getGiphyDisplayWrapper(overrideProps);
    expect(wrapper).toBeDefined();
  });

  it("should fire button onclick event", () => {
    const gifs = [
      {
        id: "fakeid",
        username: "fakeusername",
        images: { original: { url: "fakeSrcUrl" } },
      },
    ];
    const loading = false;
    const searchWord = "";
    const handleChange = jest.fn();
    const handleClick = jest.fn();
    const overrideProps = {
      gifs,
      loading,
      searchWord,
      handleChange,
      handleClick,
    };

    const wrapper = getGiphyDisplayWrapper(overrideProps);
    wrapper.find(Button).prop("onClick")();
    expect(handleClick).toHaveBeenCalled();
  });
});
