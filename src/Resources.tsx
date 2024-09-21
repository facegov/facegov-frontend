import React from 'react';

const Resources: React.FC = () => {
  return (
      <div id="get-involved">
          <h3 className="text-base md:text-2xl font-bold text-center mb-6 text-blue-400 tracking-tight">
              Resources</h3>
          <ul>
              <li> <a href="https://github.com/facegov" target="_blank"
                                              rel="noopener noreferrer">GitHub</a>: Explore our
            codebase, report issues, and submit pull requests.
          </li>
          <li><a href="https://github.com/orgs/facegov/discussions"
                                                     target="_blank"
                                                     rel="noopener noreferrer">GitHub Discussion</a>: Organization
            discussions are to broadcast news, create conversation in your community, answer questions, and share
            ideas.
          </li>
          <li><a href="https://facegov.gitbook.io/facegov-docs/" target="_blank"
                                                 rel="noopener noreferrer">Project Documentation</a>: Read our contributor guidelines to
            learn how to get started.
          </li>
        </ul>

        <p>Together, we can build a more informed and engaged democratic society. Join us in making political
          transparency the norm, not the exception.</p>
      </div>
  );
};

export default Resources;
