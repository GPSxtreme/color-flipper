* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  background: linear-gradient(to right, #00aaff, #00aa);
  transition: background-color 0.5s ease;
}
.main {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 0px !important;
  background: #eee;
  padding: 20px 30px;
  border-radius: 8px;
  width: min(90%, 500px);
  box-shadow: 3.4px 3.4px 2.7px rgba(0, 0, 0, 0.031),
    8.7px 8.7px 6.9px rgba(0, 0, 0, 0.044),
    17.7px 17.7px 14.2px rgba(0, 0, 0, 0.056),
    36.5px 36.5px 29.2px rgba(0, 0, 0, 0.069),
    100px 100px 80px rgba(0, 0, 0, 0.1);
}
.head_text {
  font-variant-caps: all-petite-caps;
  text-align: center;
}
.color_changer {
  display: block;
  outline: none;
  width: min(90%, 500px);
  border: none;
  background-color: #222;
  color: #fff;
  padding: 18px 36px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
.color_changer:hover {
  background-color: #111;
}
.code_details {
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px dashed #ccc;
  cursor: pointer;
  color: #666;
}
.code_details:hover {
  color: #000;
}
.color_name {
  border: 2px dashed #555;
  text-align: center;
  padding: 15px;
  background-color: #ccc;
  border-radius: 6px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}
