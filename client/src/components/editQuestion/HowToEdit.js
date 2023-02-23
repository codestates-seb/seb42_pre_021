const HowToEdit = () => {
  return (
    <>
      <div>How to Edit</div>
      <ul>
        {howToEdit.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const howToEdit = [
  'Correct minor typos or mistakes',
  'Clarify meaning without changing it',
  'Add related resources or links',
  'Always respect the author’s intent',
  'Don’t use edits to reply to the author',
];

export default HowToEdit;
