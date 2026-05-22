const express = require('express');
const app = express();
const path = require('path');

// index.html ፋይሉ ባለበት ቦታ መሰረት (በዋናው ፎልደር ከሆነ እንዲህ ይሁን)
app.use(express.static('./'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
