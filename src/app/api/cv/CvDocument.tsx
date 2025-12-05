import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import {
  siteConfig,
  timelineData,
  projectsData,
  educationItems,
  certifications,
  techStack,
  languages,
} from "@/lib/data";

// Cores do tema
const colors = {
  primary: "#2563eb",
  dark: "#1e293b",
  gray: "#64748b",
  lightGray: "#e2e8f0",
  white: "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: colors.dark,
    backgroundColor: colors.white,
  },
  // Header
  header: {
    backgroundColor: colors.primary,
    paddingTop: 25,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 24,
    color: colors.white,
    marginBottom: 3,
  },
  title: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.9,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    gap: 8,
  },
  contactItem: {
    fontSize: 9,
    color: colors.white,
    opacity: 0.85,
  },
  // Corpo
  body: {
    flexDirection: "row",
  },
  // Coluna principal
  mainColumn: {
    width: "62%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 15,
  },
  // Sidebar
  sidebar: {
    width: "38%",
    backgroundColor: "#f8fafc",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 20,
  },
  // Seções
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  sidebarSectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: colors.dark,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  // Resumo
  summary: {
    fontSize: 9,
    color: colors.dark,
    lineHeight: 1.5,
  },
  // Experiência
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  experienceTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: colors.dark,
  },
  experienceCompany: {
    fontSize: 9,
    color: colors.primary,
    fontFamily: "Helvetica-Bold",
  },
  experienceDate: {
    fontSize: 8,
    color: colors.gray,
  },
  experienceDescription: {
    fontSize: 8,
    color: colors.gray,
    lineHeight: 1.4,
    marginTop: 3,
  },
  achievementItem: {
    fontSize: 8,
    color: colors.dark,
    marginTop: 2,
    marginLeft: 8,
  },
  // Projetos
  projectItem: {
    marginBottom: 10,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: colors.dark,
  },
  projectDescription: {
    fontSize: 8,
    color: colors.gray,
    marginTop: 2,
  },
  projectTech: {
    fontSize: 7,
    color: colors.primary,
    marginTop: 2,
  },
  // Educação
  educationItem: {
    marginBottom: 8,
  },
  educationCourse: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: colors.dark,
  },
  educationInstitution: {
    fontSize: 8,
    color: colors.primary,
  },
  educationPeriod: {
    fontSize: 8,
    color: colors.gray,
  },
  // Skills
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: colors.dark,
    marginBottom: 3,
  },
  skillTags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 3,
    borderRadius: 2,
    fontSize: 7,
    color: colors.dark,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  // Certificações
  certItem: {
    marginBottom: 6,
  },
  certTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: colors.dark,
  },
  certDetails: {
    fontSize: 7,
    color: colors.gray,
  },
  certYear: {
    color: colors.primary,
    fontFamily: "Helvetica-Bold",
  },
  // Idiomas
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  languageName: {
    fontSize: 8,
    color: colors.dark,
  },
  languageLevel: {
    fontSize: 8,
    color: colors.gray,
  },
});

const CvDocument: React.FC = () => (
  <Document title={`Currículo - ${siteConfig.name}`} author={siteConfig.name}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{siteConfig.name}</Text>
        <Text style={styles.title}>{siteConfig.title}</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{siteConfig.email}</Text>
          <Text style={styles.contactItem}>|</Text>
          <Text style={styles.contactItem}>{siteConfig.phone}</Text>
          <Text style={styles.contactItem}>|</Text>
          <Text style={styles.contactItem}>{siteConfig.location}</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Coluna Principal */}
        <View style={styles.mainColumn}>
          {/* Perfil */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Perfil Profissional</Text>
            <Text style={styles.summary}>
              Estudante de Engenharia da Computação com interesse em programação, desenvolvimento de software e inteligência artificial. Comprometido em aprender continuamente através de projetos práticos, cursos extracurriculares e orientação de profissionais experientes. Objetivo: aplicar conhecimentos para melhorar processos e gerar soluções eficientes.
            </Text>
          </View>

          {/* Experiência */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
            {timelineData.map((item) => (
              <View key={item.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.experienceTitle}>{item.title}</Text>
                    <Text style={styles.experienceCompany}>{item.subtitle}</Text>
                  </View>
                  <Text style={styles.experienceDate}>{item.year}</Text>
                </View>
                <Text style={styles.experienceDescription}>{item.description}</Text>
                {item.achievements?.map((ach, idx) => (
                  <Text key={idx} style={styles.achievementItem}>• {ach}</Text>
                ))}
              </View>
            ))}
          </View>

          {/* Projetos */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projetos em Destaque</Text>
            {projectsData
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((project) => (
                <View key={project.id} style={styles.projectItem}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectDescription}>{project.description}</Text>
                  <Text style={styles.projectTech}>{project.technologies.join(" • ")}</Text>
                </View>
              ))}
          </View>
        </View>

        {/* Sidebar */}
        <View style={styles.sidebar}>
          {/* Formação */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Formação Acadêmica</Text>
            {educationItems.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <Text style={styles.educationCourse}>{edu.course}</Text>
                <Text style={styles.educationInstitution}>{edu.institution}</Text>
                <Text style={styles.educationPeriod}>{edu.period}</Text>
              </View>
            ))}
          </View>

          {/* Habilidades */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Habilidades</Text>
            {techStack.slice(0, 4).map((category) => (
              <View key={category.name} style={styles.skillCategory}>
                <Text style={styles.skillCategoryName}>{category.name}</Text>
                <View style={styles.skillTags}>
                  {category.items.slice(0, 5).map((skill) => (
                    <Text key={skill} style={styles.skillTag}>{skill}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Certificações */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Certificações</Text>
            {certifications.slice(0, 4).map((cert) => (
              <View key={cert.id} style={styles.certItem}>
                <Text style={styles.certTitle}>{cert.title}</Text>
                <Text style={styles.certDetails}>
                  {cert.institution} • <Text style={styles.certYear}>{cert.year}</Text>
                </Text>
              </View>
            ))}
          </View>

          {/* Idiomas */}
          <View style={styles.section}>
            <Text style={styles.sidebarSectionTitle}>Idiomas</Text>
            {languages.map((lang) => (
              <View key={lang.name} style={styles.languageRow}>
                <Text style={styles.languageName}>{lang.name}</Text>
                <Text style={styles.languageLevel}>{lang.level}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CvDocument;
