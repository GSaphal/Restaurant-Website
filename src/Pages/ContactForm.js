import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../Components/title";
import HorizontalLine from "../Components/line";
import {
  FaLocationArrow,
  FaPhone,
  FaRecordVinyl,
  FaStore,
} from "react-icons/fa";
import pageData from "../data/content.json";
import { toast } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();
  const { store } = pageData;
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    // Name validation
    if (!form.current.name.value) {
      newErrors.name = "名前は必須です";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.current.email.value) {
      newErrors.email = "メールアドレスは必須です";
      isValid = false;
    } else if (!emailRegex.test(form.current.email.value)) {
      newErrors.email = "有効なメールアドレスを入力してください";
      isValid = false;
    }

    // Phone validation (optional, but you can add a regex for it if needed)
    if (!form.current.phone.value) {
      newErrors.phone = "電話番号は必須です";
      isValid = false;
    }
    if (!form.current.message.value) {
      newErrors.message = "メッセージは必須です";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form before sending the email
    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_laznxuu", "template_kgq9cbo", form.current, {
        publicKey: "tAzl_CvM2HvMoZcnP",
      })
      .then(
        () => {
          toast.success("お問い合わせは正常に送信されました")
        },
        (error) => {
          toast.error("懸念事項の送信中にエラーが発生しました。")
        }
      );
  };
  return (
    <div className="flex flex-col space-y-4 mb-[20px] p-4">
      <div className="flex items-center gap-x-4">
        <Title title="お問い合わせ" />
      </div>

      <HorizontalLine />
      <div className="flex md:flex-row flex-col gap-4 w-full">
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col space-y-4 max-w-md mb-[20px] p-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-thin mb-2">
                  名前
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="フルネームを入力してください"
                  className="p-2 border-2 text-sm border-gray-300 rounded-md"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="text-sm font-thin mb-2">
                  住所
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="住所を入力してください"
                  className="p-2 border-2 text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-thin mb-2">
                  電子メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="メールアドレスを入力してください"
                  className="p-2 border-2 text-sm border-gray-300 rounded-md"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-thin mb-2">
                  電話番号
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="電話番号を入力してください"
                  className="p-2 border-2 text-sm border-gray-300 rounded-md"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-thin mb-2">
                  メッセージ
                </label>
                <input
                  id="message"
                  type="textarea"
                  name="message"
                  placeholder="メッセージを入力してください"
                  className="p-2 border-2 text-sm border-gray-300 rounded-md"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#f57224] text-white py-2 rounded-md hover:bg-[#eb1832]"
              >
                提出する
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col">
            <div className="text-lg font-semibold mb-2 flex gap-x-3">
              <FaStore size={22} /> {store.name["jp"]}
            </div>
            <div className="text-md font-normal mb-2 flex gap-x-3">
              <FaRecordVinyl size={22} /> {store.businessNumber["jp"]}
            </div>
            <hr className="my-3" />
            <div className="text-md font-normal mb-2 flex gap-x-3">
              <FaLocationArrow size={22} /> {store.address["jp"]}
            </div>
            <div className="text-md font-normal mb-2 flex gap-x-3">
              <FaLocationArrow size={22} /> {store.address2["jp"]}
            </div>
            <div className="text-md font-normal mb-2 flex gap-x-3">
              <FaPhone size={22} /> {store.telephone["jp"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
