import { useCallback, useEffect, useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FocusLock from "react-focus-lock";
import Highlighter from "react-highlight-words";

import { Interview1 } from "../data/AWS";
import { chris_java } from "../data/Chris_JAVA_Spring";
import { chris_react } from "../data/Chris_React";
import { Cosmos } from "../data/Cosmos";
import { CSharp } from "../data/CSharp";
import { go_blockchain } from "../data/go_blockchain";
import { hook } from "../data/hook";
import { types, interview } from "../data/interview";
import { javascript } from "../data/javascript";
import  react  from "../data/react";
import "./style.css";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [withContent, setWithContent] = useState(false);
  const [category, setCategory] = useState([]);
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();

  const handleUserKeyup = useCallback((e) => {
    if (e.key === "Escape") {
      // Escape key pressed
      e.preventDefault();
      inputRef.current.focus();
      setKeyword("");
    } else if (e.key === "/") {
      // Give input focus
      e.preventDefault();
      inputRef.current.focus();
      inputRef.current.select();
    } else if (e.key === "\\") {
      // Content Search
      e.preventDefault();
      setWithContent((prev) => !prev);
    } else if (e.key === "F9") {
      // Content Search
      e.preventDefault();
      setVisible((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", handleUserKeyup);

    return () => {
      window.removeEventListener("keyup", handleUserKeyup);
    };
  }, [handleUserKeyup]);

  return (
    <div className="d-flex align-items-center justify-content-center mt-3">
      {!visible ? (
        <div />
      ) : (
        <div
          className="container"
          style={{ maxWidth: "600px", marginBottom: "500px" }}
        >
          <div>
            {types.map((type, index) => (
                <Button
                  className="m-2"
                  variant={`${category[index] ? "" : "outline-"}light`}
                  key={index}
                  onClick={() =>
                    setCategory((prev) => {
                      const _category = [...prev];
                      _category[index] = !_category[index];
                      return _category;
                    })
                  }
                >
                  {type}
                </Button>
              ))}
          </div>
          <FocusLock>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <Form.Check
                className="white d-flex align-items-center justify-content-center pe-2"
                type="checkbox"
                checked={withContent}
                label={`Content(\\)`}
                onChange={(e) => setWithContent(e.target.checked)}
              />
              <Form.Control
                ref={inputRef}
                type="text"
                value={keyword}
                placeholder="Search..."
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <Accordion className="mt-1 preline">
              {[
                ...interview,
                ...Interview1,
                ...chris_react,
                ...chris_java,
                ...hook,
                ...javascript,
                ...Cosmos,
                ...react,
                ...go_blockchain,
                ...CSharp,
              ]
                .sort((a, b) => a < b)
                .filter((d) => {
                  const keywords = keyword.split(" ");
                  if (withContent) {
                    return keywords.every((key) => (
                        d.title.toLowerCase().includes(key) ||
                        d.content.toLowerCase().includes(key)
                      ));
                  } 
                    return keywords.every((key) => d.title.toLowerCase().includes(key));
                  
                })
                .filter((d) => category.every((c) => !c) || category[d.type])
                .map((datum, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                      <Accordion.Header className="d-flex align-items-center justify-content-between">
                        <Badge pill className="fw-normal" bg="dark">
                          {types[datum.type]}
                        </Badge>
                        <Highlighter
                          className="ps-3"
                          highlightClassName="highlight"
                          searchWords={keyword.split(" ")}
                          autoEscape
                          textToHighlight={datum.title}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="text-start text-content">
                        <Highlighter
                          highlightClassName="highlight"
                          searchWords={keyword.split(" ")}
                          autoEscape
                          textToHighlight={datum.content}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
            </Accordion>
          </FocusLock>
        </div>
      )}
    </div>
  );
};

export default Home;
