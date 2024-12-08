export default interface SectionInterface {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  closeModal?: Function;
  title?: string;
  corp: string;
  btn_text: string;
  date_range: string;
  position: string;
  description: string;
}
