import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FileUploadModal from '../components/FileUploadModal';
import '../styles/FileStatus.css';

function FileStatus() {
  const { id } = useParams();
  const [fileStatus, setFileStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadMethod, setUploadMethod] = useState('direct');

  useEffect(() => {
    const task = dummyTasks.find(task => task.id === parseInt(id));
    setFileStatus(task);
  }, [id]);

  const handleFileDownload = (fileUrl, status) => {
    if (status === '수정 가능') {
      window.open(fileUrl); // 파일 다운로드
    } else {
      alert('이 파일은 현재 다운로드할 수 없습니다.');
    }
  };

  const handleMethodChange = (method) => {
    setUploadMethod(method);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      // Handle the PDF file upload
      alert('PDF 파일이 업로드되었습니다.');
    } else {
      alert('PDF 파일만 업로드할 수 있습니다.');
    }
  };

  const handleEpsonScan = () => {
    const email = prompt('기기 이메일 주소를 입력하세요:');
    if (email) {
      // Simulate server interaction
      alert(`${email}로 클라우드 주소가 등록되었습니다. 스캔을 보내세요.`);
    }
  };

  if (!fileStatus) return <div>Loading...</div>;

  return (
    <div className="containerf">
      <Navbar />
      <div className="contentf">
        <h2 className="title1f">{fileStatus.name}</h2>
        <td>{`${fileStatus.accessStartTime} ~ ${fileStatus.accessEndTime}`}</td>
        <td className={`document-statusf ${fileStatus.status === '제출 가능' ? 'submittable' : fileStatus.status === '수정 가능' ? 'modifiable' : 'unsubmittable'}`}>
          {fileStatus.status}
        </td>
        <div className="upload-methods-backgroundf">
          <div className="upload-methodsf">
            <button onClick={() => handleMethodChange('direct')} className={uploadMethod === 'direct' ? 'active' : ''}>파일 직접 업로드</button>
            <button onClick={() => handleMethodChange('scan')} className={uploadMethod === 'scan' ? 'active' : ''}>스캔 업로드</button>
          </div>
          {uploadMethod === 'direct' ? (
            <div className="upload-sectionf">
              <input type="file" accept="application/pdf" onChange={handleFileUpload} />
             </div>
          ) : (
            <div className="upload-sectionf">
              <button onClick={handleEpsonScan}>기기 이메일 주소 입력</button>
            </div>
          )}
        </div>
        <div className="file-infof">
          <h2 className="title1f">제출한 파일 리스트</h2>
          <table className="tablef">
            <thead>
              <tr>
                <th>파일명</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {fileStatus.files.map((file, index) => (
                <tr key={index} className="document-rowf">
                  <td>
                    <ls onClick={() => handleFileDownload(file.fileUrl, fileStatus.status)} className="file-namef">
                      {file.fileName}
                    </ls>
                  </td>
                  <td className={`document-status-2f ${fileStatus.status === '제출 가능' ? 'submittable' : fileStatus.status === '수정 가능' ? 'modifiable' : 'unsubmittable'}`}>
                    {fileStatus.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FileStatus;
