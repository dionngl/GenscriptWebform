import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import EntryPage from "./EntryPage";
import ConstructDesignPage from "./ConstructDesignPage";
import ConstructReviewPage from "./ConstructReviewPage";
import PDFReviewPage from "./PDFReviewPage";

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<EntryPage />} />
                    <Route path="/ConstructDesigner" element={<ConstructDesignPage />} />
                    <Route path="/ConstructReviewer" element={<ConstructReviewPage />} />
                    <Route path="/PDFReviewer" element={<PDFReviewPage />} />
                </Routes>
            </Router>
        )
}

export default App;