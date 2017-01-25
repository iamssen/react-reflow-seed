export default (gap: number) => `// styled
  padding: 0;
  
  li {
    margin-right: ${gap}px;
    display: inline-block;
    
    &:last-child {
      margin-right: 0;
    }
  }
`