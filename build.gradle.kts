plugins {
    id("java")
    id("org.jetbrains.intellij.platform") version "2.11.0"
}

repositories {
    mavenCentral()
    intellijPlatform {
        defaultRepositories()
    }
}

dependencies {
    intellijPlatform {
        intellijIdeaCommunity("2024.3")
    }
}

intellijPlatform {
    pluginConfiguration {
        id = "com.themes.umber"
        name = "Umber"
        version = "0.3.0"
        description = "Umber — a warm, minimalistic theme family for JetBrains IDEs. Seven variants: three dark (Espresso, Charcoal, Olive) and four light (Light, Ivory, Parchment, Cream)."
        vendor {
            name = "Theme Workshop"
        }
        ideaVersion {
            sinceBuild = "243"
            untilBuild = provider { null }
        }
    }
}
