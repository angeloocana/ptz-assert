import Assert from "../Assert";
describe("Assert", () => {
    describe("ok", () => {
        it("true", () => {
            Assert.ok(true);
        });
        it("false", () => {
            let threw = false;
            try {
                Assert.ok(false);
            }
            catch (ex) {
                threw = true;
            }
            finally {
                if (!threw)
                    throw "not threw an exception";
            }
        });
    });
});
//# sourceMappingURL=Assert.test.js.map