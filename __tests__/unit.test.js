// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// To pass - Phone number
test("818-939-4019", () => {
  expect(isPhoneNumber("818-939-4019")).toBe(true);
});

test("+1 (818)-939-4019", () => {
  expect(isPhoneNumber("+1 (818)-939-4019")).toBe(true);
});

// To Fail - Phone number
test("8189394019", () => {
  expect(isPhoneNumber("8189394019")).toBe(false);
});

test("8189394019a - string too long", () => {
  expect(isPhoneNumber("8189394019a")).toBe(false);
});

// To pass - Email
test("mauryeserrano@yahoo.com", () => {
  expect(isEmail("mauryeserrano@yahoo.com")).toBe(true);
})

test("mauryeserrano@yahoo.net", () => {
  expect(isEmail("mauryeserrano@yahoo.net")).toBe(true);
})

//To fail - email
test("mauryeserrano@yahoo", () => {
  expect(isEmail("mauryeserrano@yahoo")).toBe(false);
})

test("mauryeserranoyahoo.com", () => {
  expect(isEmail("mauryeserranoyahoo.com")).toBe(false);
})

// to pass - password
test("a111111111111", () => {
  expect(isStrongPassword("a111111111111")).toBe(true);
})

test("a1111a", () => {
  expect(isStrongPassword("a1111a")).toBe(true);
})

//to fail - password
test("a11", () => {
  expect(isStrongPassword("a11")).toBe(false);
})

test("111111", () => {
  expect(isStrongPassword("11111")).toBe(false);
})

//to pass - date
test("01/01/2024", () => {
  expect(isDate("01/01/2024")).toBe(true);
})

test("01/1/2024", () => {
  expect(isDate("01/01/2024")).toBe(true);
})

//to fail - date
test("01/01/24", () => {
  expect(isDate("01/01/24")).toBe(false);
})

test("01/01/20244", () => {
  expect(isDate("01/01/20244")).toBe(false);
})

//to pass - hex
test("#111", () => {
  expect(isHexColor("#111")).toBe(true);
})

test("#111111", () => {
  expect(isHexColor("#111111")).toBe(true);
})

//to fail - hex
test("111#", () => {
  expect(isHexColor("111#")).toBe(false);
})

test("@111", () => {
  expect(isHexColor("@111")).toBe(false);
})
