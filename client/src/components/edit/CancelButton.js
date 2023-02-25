import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const CancelButton = ({ id }) => {
  const navigate = useNavigate();
  const handleCancelButton = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: '수정하던 모든 내용은 저장되지 않습니다!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.isConfirmed) {
        navigate(`../${id}`);
        toast.info('your edit is cancelled!');
      }
    });
  };
  return <CancelButtonDesign onClick={handleCancelButton}>Cancel</CancelButtonDesign>;
};

const CancelButtonDesign = styled.button`
  margin-left: 0.5rem;
  border: none;
  width: fit-content;
  height: 2.5rem;
  background-color: #fff;
  color: #0b95ff;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;
  :hover {
    background-color: #eff8ff;
  }
`;

export default CancelButton;
