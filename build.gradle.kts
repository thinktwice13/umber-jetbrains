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
        version = "1.0.0"
        description = "Umber — a warm, minimalistic theme family for JetBrains IDEs. Four variants: three dark (Espresso, Charcoal, Olive) and one light."
        vendor {
            name = "Theme Workshop"
        }
        ideaVersion {
            sinceBuild = "243"
            untilBuild = provider { null }
        }
    }
}
