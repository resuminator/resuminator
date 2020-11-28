export const addSkill = (payload) => {
  return { type: "ADD_SKILL_INFO", payload };
};

export const deleteSkillById = (id) => {
  return { type: "DELETE_SKILL_INFO", id };
};
