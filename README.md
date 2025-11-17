What are some differences between interfaces and types in TypeScript?
## Typescript এ আমরা কোন ডেটা বা অবজেক্ট এর কাঠামো কেমন হবে, ডেটা টাইপ কি হবে সেটা করার জন্য Type Alias বা Type এবং Type Interface ব্যবহার করে থাকি।

যদিও Interface অনেক টা Type Alias এর মতো তবে Interface মূলত কাজ করে Object type এ - Array, Object এবং Function.

Type আমরা কখন ব্যবহার করে থাকি:
যখন আমাদের এমন কোন টাইপ দরকার হবে যে এটি string ও হতে পারে আবার number ও হতে পারে বা অন্য কোন Type । এমন ক্ষেত্রে আমার Type ব্যবহার করি যেমন:
type ID = string । number;

উপরের উদাহরণ টি কে আমরা ইউনিয়ন বা ইন্টারসেকশন করা বলে থাকি। আর type ডিক্লার করার সময় আমরা বড় হাতের অক্ষর দিয়ে শুরু করে থাকি যা এটিকে Type হিসেবে ব্যবহার করার সময় বুঝতে সাহায্য করে। 
প্রিমিটিভ Type এর ক্ষেত্রে নতুন নাম দিতে যেমন:
type MyString = string;
Tuple এর সেপ উল্লেখ করতে: 
type Coordinotes = [number, number];
ফাংশন এর কাঠামো উল্লেখ করতে:
type Add = (num1: number, num2: number) => number; 

আর Interface ব্যবহার করি:
Object Shape, Class Constructor তৈরি করতে। 
উদাহরণঃ interface IUser {
                   name: string;
                   age: number;
              }
interface তৈরি করে আমরা নামটি I দিয়ে শুরু করি যাতে বুঝা যায় এটি Interface.

আমরা একটি interface থেকে extends করে অন্য আরেকটি interface এ সেগুলি ব্যবহার / পেতে পারি।  

Interface মূলত OOP এর নিয়ম গুলোর সাথে ভালো ভাবে খাপ খায়। তাই OOP এর ক্ষেত্রে এটি আমরা অধিক ব্যবহার করতে পারি। 
আর যদি আমাদের অধিক flexibility এর দরকার হয় বা তুলনা করার ক্ষেত্রে ইউনিয়ন, ইন্টারসেকশন বা প্রিমিটিভ type এর মতো কিছুর দরকার হয় তখন Type Alias বা Type ব্যবহার করবো।

সুতরাং আলোচনা থেকে বুঝতে পারলাম আমরা আমাদের কাজের প্ৰয়োজন অনুযায়ী ঠিক করে নিয়ে interface বা type ব্যবহার করতে পারবো। 
