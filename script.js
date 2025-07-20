function verifyStudent() {
  const id = document.getElementById("identifier").value.trim();
  const resultBox = document.getElementById("result");
  const spinner = document.querySelector(".spinner");

  resultBox.classList.add("hidden");
  spinner.classList.remove("hidden");

  setTimeout(() => {
    spinner.classList.add("hidden");

    if (id === "vc245" || id === "mauryatanisha824@gmail.com") {
      resultBox.innerHTML = `
        <h2>Certificate Verified ✅</h2>
        <img src="pic.png">
        <p><strong>Name:</strong> Tanisha S. Maurya</p>
        <p><strong>Email:</strong> mauryatanisha824@gmail.com</p>
        <p><strong>Mobile:</strong> +91 9370138110</p>
        <p><strong>College:</strong> Mumbai University</p>
        <p><strong>Certificate ID:</strong> vc245</p>
        <p><strong>Course:</strong> Web Development Internship</p>
        <p><strong>Issued Date:</strong> July 5, 2025</p>
         <h4>Assignment Status</h4>
        <p><strong>Status:</strong> <span style="color:lime">Valid</span></p>
      `;
    } else {
      resultBox.innerHTML = `
        <h2>Certificate Not Found ❌</h2>
        <p>Please check the Email or Certificate ID entered.</p>
      `;
    }

    resultBox.classList.remove("hidden");
  }, 1500);
}

