console.log(`foo.js`);
export const aaa = !!123;

console.log(aaa);

export const obj = {
  abc() {
    console.log("foo");
  },
};

if (false) {
  console.log(12334);
}

export function foo() {
  return "foo";
}
