import { Endpoints, ReposGetResponseData } from '@octokit/types';
import Link from 'components/Link';

type GithubRepo = ReposGetResponseData;
interface IProject {
  title: string;
  post?: string;
  githubSlug?: string;
  gihubData?: GithubRepo;
}

const projectList: IProject[] = [
  {
    title: 'CovidMapNZ',
    githubSlug: 'covidmap',
  },
  {
    title: 'WeAreOpenNZ',
    githubSlug: 'weareopen',
  },
  {
    title: 'CapFooty',
    githubSlug: 'sopranos-ionic',
  },
];

const Projects = ({ projectsData }: { projectsData: IProject[] }) => {
  return (
    <>
      {projectsData.map((project) => {
        return (
          <div>
            <Link href={project.gihubData.html_url} key={project.title}>
              {project.gihubData.full_name}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const githubProjects = projectList.map(async (project) => {
    if (project.githubSlug) {
      project.gihubData = await fetch(
        `https://api.github.com/repos/dalmo3/${project.githubSlug}`
      ).then((res) => res.json());
    }
    return project;
  });
  return {
    props: {
      projectsData: await Promise.all(githubProjects),
    },
  };
}
