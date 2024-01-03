import { useRef, useState } from "react";

export default function Inquiry() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: "",
  });
  const counterRef = useRef(0);
  const inputRef = useRef(null);
  const onChange = (e: any) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };
  const onSubmit = (e: any) => {
    counterRef.current++;
    // inputRef?.current?.value = "hello";
    console.log(counterRef.current);
    e.preventDefault();
    console.log(contactInfo);
  };
  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
          value={contactInfo.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="jhon@gmai.com"
          id="email"
          value={contactInfo.email}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="remarks">Remarks</label>
        <input
          type="text"
          className="form-control"
          placeholder="Remarks"
          id="remarks"
          value={contactInfo.remarks}
          onChange={onChange}
        />
      </div>

      <button
        className="btn btn-sm btn-primary mt-2"
        disabled={!contactInfo.name || !contactInfo.email}
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
}
