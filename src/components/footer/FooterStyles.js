import { css } from 'lit';
export default css`
#section {
  background-color: #37392e;
}
#section::part(container) {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
st-header {
  color: var(--color-white-700);
  gap: var(--size-075);
  margin-bottom: var(--size-200);
}
.social-icons {
  display: inline-grid;
  grid-auto-flow: column;
  gap: var(--size-100);
}
ion-icon {
  font-size: var(--size-400);
  color: var(--color-white-700);
}
ion-icon:hover {
  color: var(--color-white-900);
}
`;
