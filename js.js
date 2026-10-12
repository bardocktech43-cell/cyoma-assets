console.log("    <!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aadhaar QR Scanner & PDF Reader</title>
</head>
<body>

    <h1>Aadhaar QR Scanner & PDF Reader</h1>

    <!-- SECTION 1: SCANNER & FILE INPUT -->
    <section id="scanner-section">
        <h2>QR Code Scan Karein</h2>

        <div>
            <video id="video" width="320" height="240" autoplay playsinline muted></video>
            <canvas id="canvas" hidden></canvas>
        </div>

        <br>

        <div>
            <button id="btn-start" type="button">Camera Start Karein</button>
            <button id="btn-switch" type="button" disabled>Camera Flip Karein</button>
            
            <label for="file-input">Image / PDF Upload Karein:</label>
            <input type="file" id="file-input" accept="image/*,.pdf">
        </div>

        <p>Status: <span id="status-text">Tap Start Camera or upload a file</span></p>
    </section>

    <hr>

    <!-- SECTION 2: RESULT DISPLAY -->
    <section id="result-section">
        <h2>Aadhaar Details</h2>

        <p><strong>Status:</strong> <span id="verification-status">Not Verified</span></p>

        <div>
            <h3>Photo</h3>
            <img id="photo" alt="Aadhaar Photo Placeholder" width="120" height="150">
        </div>

        <div>
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> <span id="name-english">-</span></p>
            <p><strong>DOB:</strong> <span id="dob">-</span></p>
            <p><strong>Gender:</strong> <span id="gender">-</span></p>
            <p><strong>Aadhaar Number:</strong> <span id="aadhaar-number">XXXX XXXX XXXX</span></p>
        </div>

        <div>
            <h3>Address Information</h3>
            <p><strong>Address:</strong> <span id="address-english">-</span></p>
            <p><strong>Mobile (Last 4 Digits):</strong> <span id="mobile-number">-</span></p>
            <p id="email-row" hidden><strong>Email:</strong> <span id="email-address">-</span></p>
            <p><strong>Issued Date:</strong> <span id="reference-date">-</span></p>
        </div>

        <br>
        <button id="btn-reset" type="button">Naya Scan Karein</button>
    </section>

    <!-- External Libraries (CDNs) -->
    <script src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/kripken/j2k.js/openjpeg.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>

    <!-- Main Logic Script -->
    <script src="app.js" type="module"></script>
</body>
</html>
    ");
