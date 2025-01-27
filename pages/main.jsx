import React from 'react'

function Main() {
  return (
    <>
  <a href="https://colorlib.com/wp/templates/">
    <img
      src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-push-logo.png"
      alt="Colorlib logo"
    />
  </a>
  <h1 style={{ textAlign: "center" }}>Thank you for using our template!</h1>
  <p style={{ textAlign: "center" }}>
    For more awesome templates please visit{" "}
    <strong>
      <a href="https://colorlib.com/wp/templates/">Colorlib</a>
    </strong>
    .
  </p>
  <br />
  <p style={{ textAlign: "center", color: "red" }}>
    <strong>
      Copyright information for the template can't be altered/removed unless you
      purchase a license.
    </strong>
  </p>
  <p style={{ textAlign: "center" }}>
    <strong>
      Removing copyright information without the license will result in
      suspension of your hosting and/or domain name(s).
    </strong>
  </p>
  <p style={{ textAlign: "center" }}>
    <strong>
      More information about the license is available{" "}
      <a href="https://colorlib.com/wp/licence/">here</a>
    </strong>
    .
  </p>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\nimg {\n  margin: 0 auto;\n  display: block;\n  margin-top: 20%;\n}\n"
    }}
  />
</>

  )
}

export default Main