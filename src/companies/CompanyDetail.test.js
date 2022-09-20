import React from "react";
import { render } from "@testing-library/react";
import Company from "./CompanyDetail";
import { Routes, MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <Company />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/company/ibm"]}>
      <UserProvider>
        <Routes>
          <Route path="/company/:handle" element={<Company />} />
        </Routes>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
