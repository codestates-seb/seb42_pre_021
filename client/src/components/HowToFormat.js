import styled from 'styled-components';

const HowToFormat = () => {
  return (
    <>
      <div>How to Format</div>
      <ul>
        <li>
          <span>create code fences with backticks ` or tildes ~</span>
          <CodeBlock>
            ```
            <br />
            like so
            <br />
            ```
          </CodeBlock>
        </li>
        <li>
          <span>add language identifier to highlight code</span>
          <CodeBlock>
            ```python
            <br />
            <span>def</span> function(foo):
            <br />
            &nbsp;&nbsp;&nbsp;<span>print</span>(foo) <br />
            ```
          </CodeBlock>
        </li>
        <li>put returns between paragraphs</li>
        <li>for linebreak add 2 spaces at end</li>
        <li>
          <Italic>_italic_</Italic> or <Bold>**bold**</Bold>
        </li>
        <li>indent code by 4 spaces</li>
        <li>
          backtick escapes <InlineCode>`like _so_`</InlineCode>
        </li>
        <li>quote by placing &gt; at start of line</li>
      </ul>
    </>
  );
};

const CodeBlock = styled.div`
  font-family: 'Fira Code', monospace;
  width: 13rem;
  background-color: #f4f7f8;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 0.2rem;
  line-height: 1rem;
  > span {
    color: #0074cc;
  }
`;

const Italic = styled.span`
  font-style: italic;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const InlineCode = styled.span`
  font-family: 'Fira Code', monospace;
  padding: 0.1rem 0.3rem;
  background-color: #f9f2f4;
  border-radius: 2px;
`;

export default HowToFormat;
