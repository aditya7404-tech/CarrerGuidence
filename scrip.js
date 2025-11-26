 
    const auth = firebase.auth();
    const db = firebase.firestore();

    const form = document.getElementById("addCollegeForm");
    const collegeList = document.getElementById("collegeList");

    // Add college
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const location = document.getElementById("location").value.trim();
      const fees = parseInt(document.getElementById("fees").value);
      const eligibility = document.getElementById("eligibility").value.trim();

      try {
        await db.collection("colleges").add({ name, location, fees, eligibility });
        alert("College added successfully ✅");
        form.reset();
        loadColleges();
      } catch (error) {
        alert(error.message);
      }
    });

    // Load colleges
    async function loadColleges() {
      const snapshot = await db.collection("colleges").get();
      collegeList.innerHTML = "";
      snapshot.forEach((doc) => {
        const data = doc.data();
        const div = document.createElement("div");
        div.className = "college-card";
        div.innerHTML = `
          <h4>${data.name}</h4>
          <p>${data.location}</p>
          <p>Fees: ${data.fees}</p>
          <p>${data.eligibility}</p>
          <button onclick="deleteCollege('${doc.id}')">Delete</button>
        `;
        collegeList.appendChild(div);
      });
    }

    // Delete college
    async function deleteCollege(id) {
      if (confirm("Are you sure to delete this college?")) {
        await db.collection("colleges").doc(id).delete();
        alert("College deleted successfully ✅");
        loadColleges();
      }
    }

    loadColleges();