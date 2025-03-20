import React from "react";
import { Link } from "react-router-dom";

interface CandidateMessageTabProps {
  candidateName: string;
  candidateEmail: string;
}

const CandidateMessageTab: React.FC<CandidateMessageTabProps> = ({
  candidateName,
  candidateEmail,
}) => {
  const mailtoLink = `mailto:${candidateEmail}?subject=Ứng tuyển của ${candidateName}&body=Kính gửi ${candidateName},%0A%0A`;

  return (
    <div className="p-4">
      <h4 className="mb-4">Gửi email cho {candidateName}</h4>
      <Link
        to={mailtoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        Nhấn vào đây để mở hộp thư email và gửi tin nhắn cho {candidateName}
      </Link>
    </div>
  );
};

export default CandidateMessageTab;
