import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LinkCreationModal from '../components/LinkCreationModal';
import LinkAdditionModal from '../components/LinkAdditionModal';
import '../styles/Main.css';

function Main() {
  onGetServer(user) {
    axios.get('https://114.70.193.152:10019/v1/get/user', {
      params: { query: term },
      headers: {
        Content-Type:
          'application/json'
      }
    })
  }
  const [isLinkCreationModalOpen, setIsLinkCreationModalOpen] = useState(false);
  const [isLinkAdditionModalOpen, setIsLinkAdditionModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleTaskClick = (taskId) => {
    navigate(`/file-status/${taskId}`);
  };

  return (
    <div className="container">
      <Navbar
        onLinkCreationModalOpen={() => setIsLinkCreationModalOpen(true)}
        onLinkAdditionModalOpen={() => setIsLinkAdditionModalOpen(true)}
      />
      <div className="documents-container">
        <h2>생성된 작업 리스트</h2>
        <table className="table">
          <thead>
            <tr>
              <th>작업명</th>
              <th>작성자</th>
              <th>소속</th>
              <th>작성일</th>
              <th>접근 가능 기간</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="document-row"
                onClick={() => handleTaskClick(task.id)}
              >
                <td>{task.name}</td>
                <td>{task.creatorName}</td>
                <td>{task.affiliation}</td>
                <td>{task.createdTime}</td>
                <td>{`${task.accessStartTime} ~ ${task.accessEndTime}`}</td>
                <td className={`document-status ${task.status === '제출 가능' ? 'submittable' : task.status === '수정 가능' ? 'modifiable' : 'unsubmittable'}`}>
                  {task.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isLinkCreationModalOpen && <LinkCreationModal onClose={() => setIsLinkCreationModalOpen(false)} />}
      {isLinkAdditionModalOpen && <LinkAdditionModal onClose={() => setIsLinkAdditionModalOpen(false)} />}
    </div>
  );
}

export default Main;
