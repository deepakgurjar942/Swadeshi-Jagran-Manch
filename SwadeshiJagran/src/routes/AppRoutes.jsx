import React from "react";
import Navbar from "../layouts/Navbar";
import Homepage from "../pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Introduction from "../pages/Introduction";
import MovementPage from "../pages/MovementPage";
import OurFounder from "../pages/OurFounder";
import Philosophy from "../pages/Philosophy";
import EducationPage from "../pages/EducationPage";
import EnvironmentPage from "../pages/EnvironmentPage";
import AgriculturePage from "../pages/AgriculturePage";
import RetailTradePage from "../pages/RetailTradePage";
import GmDebatePage from "../pages/GmDebatePage";
import IprPage from "../pages/IprPage";
import FoodPage from "../pages/FoodPage";
import NationalEvent from "../pages/NationalEventPage";
import SbAbhiyanPage from "../pages/SbAbhiyanPage";
import ResolutionPage from "../pages/ResolutionPage";
import PressReleasesPage from "../pages/PressReleasesPage";
import NewsPage from "../pages/NewsWirePage";
import AllPostPage from "../pages/AllPostPage";
import EditorialPage from "../pages/EditorialPage";
import Photos from "../pages/Photos";
import Books from "../pages/Books";
import Videos from "../pages/Videos";
import Monograph from "../pages/Monograph";
import EditorialBoardPage from "../pages/EditorialBoardPage";
import AimAndScope from "../pages/AimAndScope";
import SubmissionPublication from "../pages/SubmissionPublication";
import CurrentIssue from "../pages/CurrentIssue";
import AboutUsPage from "../pages/AboutUsPage";
import BlogPage from "../pages/BlogPage";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Redirect from root "/" to "/Home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Your home page route */}
          <Route path="/Home" element={<Homepage />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/movement" element={<MovementPage />} />
          <Route path="/about/our-founder" element={<OurFounder />} />
          <Route path="/about/philosophy" element={<Philosophy />} />
          <Route path="/category/education" element={<EducationPage />} />
          <Route path="/category/environment" element={<EnvironmentPage />} />
          <Route path="/category/agriculture" element={<AgriculturePage />} />
          <Route path="/category/retail-trade" element={<RetailTradePage />} />
          <Route path="/category/gm-debate" element={<GmDebatePage />} />
          <Route path="/category/ipr" element={<IprPage />} />
          <Route path="/category/food" element={<FoodPage />} />
          <Route path="/category/national-events" element={<NationalEvent />} />
          <Route path="/category/sb-abhiyan" element={<SbAbhiyanPage />} />
          <Route path="/category/resolution" element={<ResolutionPage />} />
          <Route path="/category/press-releases" element={<PressReleasesPage/>}/>
          <Route path="/category/news-wire" element={<NewsPage/>}/>
          <Route path="/allpost" element={<AllPostPage/>}/>
          <Route path="/category/editorial" element = {<EditorialPage/>}/>
          <Route path="gallery/photo-gallery" element={<Photos/>}/>
          <Route path="gallery/video-gallery" element={<Videos/>}/>
          <Route path="/publication/books" element={<Books/>}/>
          <Route path="page/about-monograph" element={<Monograph/>}/>
          <Route path="monograph/editorial-board" element={<EditorialBoardPage/>}/>
          <Route path="page/aim-scope" element={<AimAndScope/>}/>
          <Route path="/monograph/submission-publication" element={<SubmissionPublication/>}/>
          <Route path="/monograph/current-issue" element={<CurrentIssue/>}/>
          <Route path="about" element={<AboutUsPage/>}/>
          <Route path="category/blog" element={<BlogPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
