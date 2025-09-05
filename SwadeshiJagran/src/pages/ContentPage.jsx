import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaLink, FaHeart, FaComment } from 'react-icons/fa';

const ContentPage = () => {
  const [comments, setComments] = useState([
    { id: 1, name: "John Doe", text: "This is a very informative article. Thanks for sharing!", time: "2 hours ago" },
    { id: 2, name: "Jane Smith", text: "I found the section about government initiatives particularly helpful.", time: "5 hours ago" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(24);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        name: "Current User",
        text: newComment,
        time: "Just now"
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const shareUrl = "https://example.com/article";
  const shareText = "Check out this informative article!";

  return (
    <div className='mt-28'>
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Full-width Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvdmVybm1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Government Building"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Digital Transformation in Government Services
            </h1>
            
            {/* Description */}
            <div className="prose max-w-none text-gray-700 mb-6">
              <p className="mb-4">
                The Government Digital Initiative aims to modernize public services through technology, making them more accessible and efficient for all citizens. This program represents our commitment to transparency and improved governance.
              </p>
              <p className="mb-4">
                Through this initiative, we are working to digitize essential services, reduce processing times, and provide citizens with easy access to information and resources. Our goal is to create a more connected and responsive government.
              </p>
              <p>
                The program includes online portals for service requests, digital documentation systems, and mobile applications for easier access to public services. We believe that technology can bridge gaps and create a more inclusive society.
              </p>
            </div>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between py-4 border-t border-b border-gray-200 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span>June 15, 2023</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>5 min read</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <button 
                  onClick={handleLike}
                  className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                >
                  <FaHeart className="mr-1" />
                  <span>{likes} Likes</span>
                </button>
                <div className="flex items-center text-gray-500">
                  <FaComment className="mr-1" />
                  <span>{comments.length} Comments</span>
                </div>
              </div>
            </div>
            
            {/* Share Options */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Share this article</h3>
              <div className="flex space-x-3">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={18} />
                </a>
                
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={18} />
                </a>
                
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    alert("Link copied to clipboard!");
                  }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-colors"
                  aria-label="Copy link"
                >
                  <FaLink size={16} />
                </button>
              </div>
            </div>
            
            {/* Comment Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Comments ({comments.length})</h3>
              
              {/* Add Comment */}
              <div className="mb-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add your comment..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
                  rows="3"
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleAddComment}
                    className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
              
              {/* Comments List */}
              <div className="space-y-5">
                {comments.map(comment => (
                  <div key={comment.id} className="border-b border-gray-200 pb-5 last:border-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold">
                          {comment.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                          <span className="text-sm text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-gray-700 mt-1">{comment.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContentPage;