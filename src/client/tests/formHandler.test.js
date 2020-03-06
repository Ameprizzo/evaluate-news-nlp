import {
    handleSubmit
} from "../js/formHandler";

test("It should return true", async () => {
    expect(handleSubmit).toBeDefined();
});

test("It should be a function", async () => {
    expect(typeof handleSubmit).toBe("function");
});