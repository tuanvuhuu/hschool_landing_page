"use client";

import { useState, FormEvent } from "react";

/* -------------------------------------------------------------------------
 * GOOGLE FORM CONFIG
 * Để nhận đăng ký qua Google Form, điền thông tin bên dưới:
 *  1. Tạo Google Form với các câu hỏi: Họ tên, SĐT, Độ tuổi, Lời nhắn
 *  2. Bấm "Get pre-filled link" để lấy các entry.xxxxx tương ứng
 *  3. Dán URL dạng .../formResponse và các entry id vào đây
 * Khi `action` còn rỗng -> form chạy ở chế độ demo (chỉ hiện thông báo).
 * ----------------------------------------------------------------------- */
const GOOGLE_FORM = {
  action: "", // ví dụ: "https://docs.google.com/forms/d/e/XXXX/formResponse"
  fields: {
    parent: "entry.1111111111",
    phone: "entry.2222222222",
    age: "entry.3333333333",
    note: "entry.4444444444",
  } as Record<string, string>,
};

type FormState = { parent: string; phone: string; age: string; note: string };
const empty: FormState = { parent: "", phone: "", age: "", note: "" };

export default function ContactForm() {
  const [data, setData] = useState<FormState>(empty);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  function submitToGoogleForm(values: FormState) {
    const iframeName = "hs-gform-target";
    let iframe = document.getElementById(iframeName) as HTMLIFrameElement | null;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.id = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }
    const ghost = document.createElement("form");
    ghost.action = GOOGLE_FORM.action;
    ghost.method = "POST";
    ghost.target = iframeName;
    ghost.style.display = "none";
    (Object.keys(GOOGLE_FORM.fields) as (keyof FormState)[]).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = GOOGLE_FORM.fields[key];
      input.value = values[key] || "";
      ghost.appendChild(input);
    });
    document.body.appendChild(ghost);
    ghost.submit();
    setTimeout(() => ghost.remove(), 1500);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!data.parent.trim() || !data.phone.trim()) {
      setError(true);
      setMsg("Vui lòng nhập họ tên và số điện thoại.");
      return;
    }
    if (GOOGLE_FORM.action) submitToGoogleForm(data);
    setError(false);
    setMsg(`Cảm ơn ${data.parent.trim()}! HSchool sẽ liên hệ với bạn sớm nhất 💙`);
    setData(empty);
  }

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="parent">Họ tên phụ huynh</label>
        <input id="parent" type="text" placeholder="Nguyễn Văn A" value={data.parent} onChange={set("parent")} required />
      </div>
      <div className="field">
        <label htmlFor="phone">Số điện thoại</label>
        <input id="phone" type="tel" placeholder="09xx xxx xxx" value={data.phone} onChange={set("phone")} required />
      </div>
      <div className="field">
        <label htmlFor="age">Độ tuổi của bé</label>
        <select id="age" value={data.age} onChange={set("age")}>
          <option value="">-- Chọn độ tuổi --</option>
          <option>18 – 36 tháng</option>
          <option>3 – 5 tuổi</option>
          <option>5 – 6 tuổi</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="note">Lời nhắn</label>
        <textarea id="note" rows={3} placeholder="Mình muốn được tư vấn..." value={data.note} onChange={set("note")} />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Gửi đăng ký</button>
      <p className="form-msg" role="status" style={error ? { color: "#e23b3b" } : undefined}>
        {msg}
      </p>
    </form>
  );
}
