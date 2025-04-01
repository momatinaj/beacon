import { Package, Server, Github } from "lucide-react"

export const datasets = {
  oracle: {
    title: "Oracle Dataset",
    size: "5GB",
    description: "Comprehensive collection of graphs with verified ground truths",
    format: "CSV/JSON",
    stats: { label: "Graphs", value: "26,435" },
    version: "1.2.0",
    lastUpdated: "June 10, 2024",
    license: "CC BY-NC-ND 4.0",
    downloadUrl: "https://drive.google.com/file/d/14kgxkIYheNWi_E1HAvAXZWtLYts7fkSC/view?usp=sharing",
    docsUrl: "#"
  },
  benchmark: {
    title: "Benchmark Sets",
    size: "2GB",
    description: "Curated subsets for standardized evaluation",
    format: "CSV/JSON",
    stats: { label: "Subsets", value: "10 sets" },
    version: "1.2.0",
    lastUpdated: "June 10, 2024",
    license: "CC BY-NC-ND 4.0",
    downloadUrl: "https://drive.google.com/drive/folders/1i_xBxHEvZ6zv2NmfuKwkWQ-P2e0Y_fL2?usp=sharing",
    docsUrl: "#"
  }
}

export const tools = {
  sampler: {
    title: "BEACON-Sampler",
    version: "1.2.0",
    description: "Python package for generating custom graph datasets",
    longDescription: "BEACON-Sampler (rwdd) allows you to generate custom graph datasets with specific properties for targeted evaluation of subgraph counting methods.",
    requirements: [
      { icon: Server, text: "Python 3.8+ required" },
      { icon: Package, text: "NetworkX, NumPy, SciPy dependencies" },
      { icon: Github, text: "MIT License" }
    ],
    primaryButton: {
      text: "PyPI Package",
      icon: Package,
      href: "https://pypi.org/project/rwdq/"
    },
    secondaryButton: {
      text: "GitHub Repository",
      icon: Github,
      href: "https://github.com/zxj0302/rwdq"
    }
  },
  docker: {
    title: "Docker Evaluation Environment",
    version: "1.2.0",
    description: "Containerized environment for reproducible evaluation",
    longDescription: "Our Docker image provides a standardized environment for model evaluation, ensuring consistent results across different systems. It includes all necessary dependencies and evaluation scripts.",
    requirements: [
      { icon: Server, text: "Docker 20.10+ required" },
      { icon: Package, text: "CUDA 12.1 support included" },
      { icon: Github, text: "Apache 2.0 License" }
    ],
    primaryButton: {
      text: "Docker Hub",
      icon: Package,
      href: "https://hub.docker.com/repository/docker/zhuxiangju/benchmark_subgraphcounting/general"
    },
    secondaryButton: {
      text: "Documentation",
      icon: Github,
      href: "https://hub.docker.com/repository/docker/zhuxiangju/benchmark_subgraphcounting/general"
    }
  }
}

export const repository = {
  title: "BEACON Repository",
  description: "Official repository for the BEACON benchmark",
  language: "Python",
  version: "1.2.0",
  lastUpdated: "June 10, 2024",
  license: "MIT",
  githubUrl: "https://github.com/zxj0302/MLSC",
  downloadUrl: "#"
} 